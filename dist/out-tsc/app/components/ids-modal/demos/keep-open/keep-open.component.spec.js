import { TestBed } from '@angular/core/testing';
import { KeepOpenComponent } from './keep-open.component';
describe('KeepOpenComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [KeepOpenComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(KeepOpenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=keep-open.component.spec.js.map