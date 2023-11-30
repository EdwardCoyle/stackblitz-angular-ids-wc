import { TestBed } from '@angular/core/testing';
import { DataDrivenComponent } from './data-driven.component';
describe('DataDrivenComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DataDrivenComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DataDrivenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data-driven.component.spec.js.map