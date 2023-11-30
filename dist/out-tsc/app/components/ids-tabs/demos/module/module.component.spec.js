import { TestBed } from '@angular/core/testing';
import { ModuleComponent } from './module.component';
describe('ModuleComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModuleComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=module.component.spec.js.map